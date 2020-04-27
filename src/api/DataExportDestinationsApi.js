/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.0.0
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
    define(['ApiClient', 'model/Destination', 'model/DestinationBody', 'model/Destinations', 'model/PatchOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Destination'), require('../model/DestinationBody'), require('../model/Destinations'), require('../model/PatchOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.DataExportDestinationsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Destination, root.LaunchDarklyApi.DestinationBody, root.LaunchDarklyApi.Destinations, root.LaunchDarklyApi.PatchOperation);
  }
}(this, function(ApiClient, Destination, DestinationBody, Destinations, PatchOperation) {
  'use strict';

  /**
   * DataExportDestinations service.
   * @module api/DataExportDestinationsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new DataExportDestinationsApi. 
   * @alias module:api/DataExportDestinationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteDestination operation.
     * @callback module:api/DataExportDestinationsApi~deleteDestinationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single data export destination by ID
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} destinationId The data export destination ID.
     * @param {module:api/DataExportDestinationsApi~deleteDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDestination = function(projectKey, environmentKey, destinationId, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteDestination");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling deleteDestination");
      }

      // verify the required parameter 'destinationId' is set
      if (destinationId === undefined || destinationId === null) {
        throw new Error("Missing the required parameter 'destinationId' when calling deleteDestination");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'destinationId': destinationId
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
        '/destinations/{projectKey}/{environmentKey}/{destinationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDestination operation.
     * @callback module:api/DataExportDestinationsApi~getDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Destination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single data export destination by ID
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} destinationId The data export destination ID.
     * @param {module:api/DataExportDestinationsApi~getDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Destination}
     */
    this.getDestination = function(projectKey, environmentKey, destinationId, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getDestination");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getDestination");
      }

      // verify the required parameter 'destinationId' is set
      if (destinationId === undefined || destinationId === null) {
        throw new Error("Missing the required parameter 'destinationId' when calling getDestination");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'destinationId': destinationId
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
      var returnType = Destination;

      return this.apiClient.callApi(
        '/destinations/{projectKey}/{environmentKey}/{destinationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDestinations operation.
     * @callback module:api/DataExportDestinationsApi~getDestinationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Destinations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all data export destinations.
     * @param {module:api/DataExportDestinationsApi~getDestinationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Destinations}
     */
    this.getDestinations = function(callback) {
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
      var returnType = Destinations;

      return this.apiClient.callApi(
        '/destinations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchDestination operation.
     * @callback module:api/DataExportDestinationsApi~patchDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Destination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a partial update to a data export destination.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} destinationId The data export destination ID.
     * @param {Array.<module:model/PatchOperation>} patchOnly Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39; Feature flag patches also support JSON Merge Patch format. &#39;https://tools.ietf.org/html/rfc7386&#39; The addition of comments is also supported.
     * @param {module:api/DataExportDestinationsApi~patchDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Destination}
     */
    this.patchDestination = function(projectKey, environmentKey, destinationId, patchOnly, callback) {
      var postBody = patchOnly;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchDestination");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchDestination");
      }

      // verify the required parameter 'destinationId' is set
      if (destinationId === undefined || destinationId === null) {
        throw new Error("Missing the required parameter 'destinationId' when calling patchDestination");
      }

      // verify the required parameter 'patchOnly' is set
      if (patchOnly === undefined || patchOnly === null) {
        throw new Error("Missing the required parameter 'patchOnly' when calling patchDestination");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'destinationId': destinationId
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
      var returnType = Destination;

      return this.apiClient.callApi(
        '/destinations/{projectKey}/{environmentKey}/{destinationId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postDestination operation.
     * @callback module:api/DataExportDestinationsApi~postDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Destination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new data export destination
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {module:model/DestinationBody} destinationBody Create a new data export destination.
     * @param {module:api/DataExportDestinationsApi~postDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Destination}
     */
    this.postDestination = function(projectKey, environmentKey, destinationBody, callback) {
      var postBody = destinationBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postDestination");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling postDestination");
      }

      // verify the required parameter 'destinationBody' is set
      if (destinationBody === undefined || destinationBody === null) {
        throw new Error("Missing the required parameter 'destinationBody' when calling postDestination");
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
      var returnType = Destination;

      return this.apiClient.callApi(
        '/destinations/{projectKey}/{environmentKey}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
