/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.0.0
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
    define(['ApiClient', 'model/PatchOperation', 'model/Token', 'model/TokenBody', 'model/Tokens'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PatchOperation'), require('../model/Token'), require('../model/TokenBody'), require('../model/Tokens'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.AccessTokensApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.PatchOperation, root.LaunchDarklyApi.Token, root.LaunchDarklyApi.TokenBody, root.LaunchDarklyApi.Tokens);
  }
}(this, function(ApiClient, PatchOperation, Token, TokenBody, Tokens) {
  'use strict';

  /**
   * AccessTokens service.
   * @module api/AccessTokensApi
   * @version 5.0.0
   */

  /**
   * Constructs a new AccessTokensApi. 
   * @alias module:api/AccessTokensApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteToken operation.
     * @callback module:api/AccessTokensApi~deleteTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an access token by ID.
     * @param {String} tokenId The access token ID.
     * @param {module:api/AccessTokensApi~deleteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteToken = function(tokenId, callback) {
      var postBody = null;

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling deleteToken");
      }


      var pathParams = {
        'tokenId': tokenId
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
        '/tokens/{tokenId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:api/AccessTokensApi~getTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single access token by ID.
     * @param {String} tokenId The access token ID.
     * @param {module:api/AccessTokensApi~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    this.getToken = function(tokenId, callback) {
      var postBody = null;

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getToken");
      }


      var pathParams = {
        'tokenId': tokenId
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
      var returnType = Token;

      return this.apiClient.callApi(
        '/tokens/{tokenId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokens operation.
     * @callback module:api/AccessTokensApi~getTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of tokens in the account.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showAll If set to true, and the authentication access token has the \&quot;Admin\&quot; role, personal access tokens for all members will be retrieved.
     * @param {module:api/AccessTokensApi~getTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tokens}
     */
    this.getTokens = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'showAll': opts['showAll'],
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
      var returnType = Tokens;

      return this.apiClient.callApi(
        '/tokens', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchToken operation.
     * @callback module:api/AccessTokensApi~patchTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an access token by ID.
     * @param {String} tokenId The access token ID.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39;
     * @param {module:api/AccessTokensApi~patchTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    this.patchToken = function(tokenId, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling patchToken");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchToken");
      }


      var pathParams = {
        'tokenId': tokenId
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
      var returnType = Token;

      return this.apiClient.callApi(
        '/tokens/{tokenId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postToken operation.
     * @callback module:api/AccessTokensApi~postTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new token.
     * @param {module:model/TokenBody} tokenBody Create a new access token.
     * @param {module:api/AccessTokensApi~postTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    this.postToken = function(tokenBody, callback) {
      var postBody = tokenBody;

      // verify the required parameter 'tokenBody' is set
      if (tokenBody === undefined || tokenBody === null) {
        throw new Error("Missing the required parameter 'tokenBody' when calling postToken");
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
      var returnType = Token;

      return this.apiClient.callApi(
        '/tokens', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetToken operation.
     * @callback module:api/AccessTokensApi~resetTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset an access token&#39;s secret key with an optional expiry time for the old key.
     * @param {String} tokenId The access token ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiry An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.
     * @param {module:api/AccessTokensApi~resetTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    this.resetToken = function(tokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling resetToken");
      }


      var pathParams = {
        'tokenId': tokenId
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
      var returnType = Token;

      return this.apiClient.callApi(
        '/tokens/{tokenId}/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
