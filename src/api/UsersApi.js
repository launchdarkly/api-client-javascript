/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient', 'model/User', 'model/Users'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/Users'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.UsersApi = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.User, root.LaunchDarklyRestApi.Users);
  }
}(this, function(ApiClient, User, Users) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 2.0.2
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user by ID.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userKey The user&#39;s key.
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(projectKey, environmentKey, userKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteUser");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling deleteUser");
      }

      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling deleteUser");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userKey': userKey
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
        '/users/{projectKey}/{environmentKey}/{userKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSearchUsers operation.
     * @callback module:api/UsersApi~getSearchUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users in LaunchDarkly based on their last active date, or a search query. It should not be used to enumerate all users in LaunchDarkly-- use the List users API resource.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Search query.
     * @param {Number} opts.limit Pagination limit.
     * @param {Number} opts.offset Specifies the first item to return in the collection.
     * @param {Number} opts.after A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occured after this timestamp.
     * @param {module:api/UsersApi~getSearchUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    this.getSearchUsers = function(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getSearchUsers");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getSearchUsers");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      var queryParams = {
        'q': opts['q'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'after': opts['after'],
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
      var returnType = Users;

      return this.apiClient.callApi(
        '/user-search/{projectKey}/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user by key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userKey The user&#39;s key.
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.getUser = function(projectKey, environmentKey, userKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUser");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUser");
      }

      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling getUser");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userKey': userKey
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
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{projectKey}/{environmentKey}/{userKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all users in the environment. Includes the total count of users. In each page, there will be up to &#39;limit&#39; users returned (default 20). This is useful for exporting all users in the system for further analysis. Paginated collections will include a next link containing a URL with the next set of elements in the collection.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Pagination limit.
     * @param {String} opts.h This parameter is required when following \&quot;next\&quot; links.
     * @param {String} opts.scrollId This parameter is required when following \&quot;next\&quot; links.
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */
    this.getUsers = function(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUsers");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUsers");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      var queryParams = {
        'limit': opts['limit'],
        'h': opts['h'],
        'scrollId': opts['scrollId'],
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
      var returnType = Users;

      return this.apiClient.callApi(
        '/users/{projectKey}/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
