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
    define(['ApiClient', 'model/CustomRole', 'model/CustomRoleBody', 'model/CustomRoles', 'model/PatchOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomRole'), require('../model/CustomRoleBody'), require('../model/CustomRoles'), require('../model/PatchOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.CustomRolesApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.CustomRole, root.LaunchDarklyApi.CustomRoleBody, root.LaunchDarklyApi.CustomRoles, root.LaunchDarklyApi.PatchOperation);
  }
}(this, function(ApiClient, CustomRole, CustomRoleBody, CustomRoles, PatchOperation) {
  'use strict';

  /**
   * CustomRoles service.
   * @module api/CustomRolesApi
   * @version 2.0.9
   */

  /**
   * Constructs a new CustomRolesApi. 
   * @alias module:api/CustomRolesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCustomRole operation.
     * @callback module:api/CustomRolesApi~deleteCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom role by key.
     * @param {String} customRoleKey The custom role key.
     * @param {module:api/CustomRolesApi~deleteCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomRole = function(customRoleKey, callback) {
      var postBody = null;

      // verify the required parameter 'customRoleKey' is set
      if (customRoleKey === undefined || customRoleKey === null) {
        throw new Error("Missing the required parameter 'customRoleKey' when calling deleteCustomRole");
      }


      var pathParams = {
        'customRoleKey': customRoleKey
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
        '/roles/{customRoleKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomRole operation.
     * @callback module:api/CustomRolesApi~getCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one custom role by key.
     * @param {String} customRoleKey The custom role key.
     * @param {module:api/CustomRolesApi~getCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomRole}
     */
    this.getCustomRole = function(customRoleKey, callback) {
      var postBody = null;

      // verify the required parameter 'customRoleKey' is set
      if (customRoleKey === undefined || customRoleKey === null) {
        throw new Error("Missing the required parameter 'customRoleKey' when calling getCustomRole");
      }


      var pathParams = {
        'customRoleKey': customRoleKey
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
      var returnType = CustomRole;

      return this.apiClient.callApi(
        '/roles/{customRoleKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomRoles operation.
     * @callback module:api/CustomRolesApi~getCustomRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomRoles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a complete list of custom roles.
     * @param {module:api/CustomRolesApi~getCustomRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomRoles}
     */
    this.getCustomRoles = function(callback) {
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
      var returnType = CustomRoles;

      return this.apiClient.callApi(
        '/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCustomRole operation.
     * @callback module:api/CustomRolesApi~patchCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a custom role by key.
     * @param {String} customRoleKey The custom role key.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39;
     * @param {module:api/CustomRolesApi~patchCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomRole}
     */
    this.patchCustomRole = function(customRoleKey, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'customRoleKey' is set
      if (customRoleKey === undefined || customRoleKey === null) {
        throw new Error("Missing the required parameter 'customRoleKey' when calling patchCustomRole");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchCustomRole");
      }


      var pathParams = {
        'customRoleKey': customRoleKey
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
      var returnType = CustomRole;

      return this.apiClient.callApi(
        '/roles/{customRoleKey}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCustomRole operation.
     * @callback module:api/CustomRolesApi~postCustomRoleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new custom role.
     * @param {module:model/CustomRoleBody} customRoleBody New role or roles to create.
     * @param {module:api/CustomRolesApi~postCustomRoleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postCustomRole = function(customRoleBody, callback) {
      var postBody = customRoleBody;

      // verify the required parameter 'customRoleBody' is set
      if (customRoleBody === undefined || customRoleBody === null) {
        throw new Error("Missing the required parameter 'customRoleBody' when calling postCustomRole");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/roles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
