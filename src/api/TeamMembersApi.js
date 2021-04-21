/*
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 5.1.0
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
    define(['ApiClient', 'model/Member', 'model/Members', 'model/MembersBody', 'model/PatchOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Member'), require('../model/Members'), require('../model/MembersBody'), require('../model/PatchOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.TeamMembersApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Member, root.LaunchDarklyApi.Members, root.LaunchDarklyApi.MembersBody, root.LaunchDarklyApi.PatchOperation);
  }
}(this, function(ApiClient, Member, Members, MembersBody, PatchOperation) {
  'use strict';

  /**
   * TeamMembers service.
   * @module api/TeamMembersApi
   * @version 5.1.0
   */

  /**
   * Constructs a new TeamMembersApi. 
   * @alias module:api/TeamMembersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteMember operation.
     * @callback module:api/TeamMembersApi~deleteMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team member by ID.
     * @param {String} memberId The member ID.
     * @param {module:api/TeamMembersApi~deleteMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMember = function(memberId, callback) {
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling deleteMember");
      }


      var pathParams = {
        'memberId': memberId
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
        '/members/{memberId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMe operation.
     * @callback module:api/TeamMembersApi~getMeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current team member associated with the token
     * @param {module:api/TeamMembersApi~getMeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.getMe = function(callback) {
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
      var returnType = Member;

      return this.apiClient.callApi(
        '/members/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMember operation.
     * @callback module:api/TeamMembersApi~getMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single team member by ID.
     * @param {String} memberId The member ID.
     * @param {module:api/TeamMembersApi~getMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.getMember = function(memberId, callback) {
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling getMember");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = Member;

      return this.apiClient.callApi(
        '/members/{memberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMembers operation.
     * @callback module:api/TeamMembersApi~getMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Members} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all members in the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of objects to return. Defaults to -1, which returns everything.
     * @param {Number} opts.offset Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first 10 items and then return the next limit items.
     * @param {String} opts.filter A comma-separated list of filters. Each filter is of the form field:value.
     * @param {String} opts.sort A comma-separated list of fields to sort by. A field prefixed by a - will be sorted in descending order.
     * @param {module:api/TeamMembersApi~getMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Members}
     */
    this.getMembers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'filter': opts['filter'],
        'sort': opts['sort'],
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
      var returnType = Members;

      return this.apiClient.callApi(
        '/members', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchMember operation.
     * @callback module:api/TeamMembersApi~patchMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a team member by ID.
     * @param {String} memberId The member ID.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. 'http://jsonpatch.com/'
     * @param {module:api/TeamMembersApi~patchMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.patchMember = function(memberId, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling patchMember");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchMember");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = Member;

      return this.apiClient.callApi(
        '/members/{memberId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postMembers operation.
     * @callback module:api/TeamMembersApi~postMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Members} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite new members.
     * @param {Array.<module:model/MembersBody>} membersBody New members to invite.
     * @param {module:api/TeamMembersApi~postMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Members}
     */
    this.postMembers = function(membersBody, callback) {
      var postBody = membersBody;

      // verify the required parameter 'membersBody' is set
      if (membersBody === undefined || membersBody === null) {
        throw new Error("Missing the required parameter 'membersBody' when calling postMembers");
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
      var returnType = Members;

      return this.apiClient.callApi(
        '/members', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
