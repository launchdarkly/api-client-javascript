/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.1
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
    define(['ApiClient', 'model/PatchOperation', 'model/UnboundedSegmentTargetsBody', 'model/UserSegment', 'model/UserSegmentBody', 'model/UserSegments', 'model/UserTargetingExpirationForSegment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PatchOperation'), require('../model/UnboundedSegmentTargetsBody'), require('../model/UserSegment'), require('../model/UserSegmentBody'), require('../model/UserSegments'), require('../model/UserTargetingExpirationForSegment'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserSegmentsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.PatchOperation, root.LaunchDarklyApi.UnboundedSegmentTargetsBody, root.LaunchDarklyApi.UserSegment, root.LaunchDarklyApi.UserSegmentBody, root.LaunchDarklyApi.UserSegments, root.LaunchDarklyApi.UserTargetingExpirationForSegment);
  }
}(this, function(ApiClient, PatchOperation, UnboundedSegmentTargetsBody, UserSegment, UserSegmentBody, UserSegments, UserTargetingExpirationForSegment) {
  'use strict';

  /**
   * UserSegments service.
   * @module api/UserSegmentsApi
   * @version 3.9.1
   */

  /**
   * Constructs a new UserSegmentsApi. 
   * @alias module:api/UserSegmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteUserSegment operation.
     * @callback module:api/UserSegmentsApi~deleteUserSegmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user segment.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {module:api/UserSegmentsApi~deleteUserSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserSegment = function(projectKey, environmentKey, userSegmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteUserSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling deleteUserSegment");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling deleteUserSegment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
        '/segments/{projectKey}/{environmentKey}/{userSegmentKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExpiringUserTargetsOnSegment operation.
     * @callback module:api/UserSegmentsApi~getExpiringUserTargetsOnSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTargetingExpirationForSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expiring user targets for user segment
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {module:api/UserSegmentsApi~getExpiringUserTargetsOnSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserTargetingExpirationForSegment}
     */
    this.getExpiringUserTargetsOnSegment = function(projectKey, environmentKey, userSegmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getExpiringUserTargetsOnSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getExpiringUserTargetsOnSegment");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling getExpiringUserTargetsOnSegment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
      var returnType = UserTargetingExpirationForSegment;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{userSegmentKey}/expiring-user-targets/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserSegment operation.
     * @callback module:api/UserSegmentsApi~getUserSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user segment by key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {module:api/UserSegmentsApi~getUserSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    this.getUserSegment = function(projectKey, environmentKey, userSegmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUserSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUserSegment");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling getUserSegment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
      var returnType = UserSegment;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{environmentKey}/{userSegmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserSegments operation.
     * @callback module:api/UserSegmentsApi~getUserSegmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all user segments in the given project.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag Filter by tag. A tag can be used to group flags across projects.
     * @param {module:api/UserSegmentsApi~getUserSegmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegments}
     */
    this.getUserSegments = function(projectKey, environmentKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUserSegments");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUserSegments");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey
      };
      var queryParams = {
        'tag': opts['tag'],
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
      var returnType = UserSegments;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchExpiringUserTargetsOnSegment operation.
     * @callback module:api/UserSegmentsApi~patchExpiringUserTargetsOnSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTargetingExpirationForSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update, add, or delete expiring user targets on user segment
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {Object} semanticPatchWithComment Requires a Semantic Patch representation of the desired changes to the resource. &#39;https://apidocs.launchdarkly.com/reference#updates-via-semantic-patches&#39;. The addition of comments is also supported.
     * @param {module:api/UserSegmentsApi~patchExpiringUserTargetsOnSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserTargetingExpirationForSegment}
     */
    this.patchExpiringUserTargetsOnSegment = function(projectKey, environmentKey, userSegmentKey, semanticPatchWithComment, callback) {
      var postBody = semanticPatchWithComment;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchExpiringUserTargetsOnSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchExpiringUserTargetsOnSegment");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling patchExpiringUserTargetsOnSegment");
      }

      // verify the required parameter 'semanticPatchWithComment' is set
      if (semanticPatchWithComment === undefined || semanticPatchWithComment === null) {
        throw new Error("Missing the required parameter 'semanticPatchWithComment' when calling patchExpiringUserTargetsOnSegment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
      var returnType = UserTargetingExpirationForSegment;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{userSegmentKey}/expiring-user-targets/{environmentKey}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchUserSegment operation.
     * @callback module:api/UserSegmentsApi~patchUserSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a partial update to a user segment.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {Array.<module:model/PatchOperation>} patchOnly Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39; Feature flag patches also support JSON Merge Patch format. &#39;https://tools.ietf.org/html/rfc7386&#39; The addition of comments is also supported.
     * @param {module:api/UserSegmentsApi~patchUserSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    this.patchUserSegment = function(projectKey, environmentKey, userSegmentKey, patchOnly, callback) {
      var postBody = patchOnly;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchUserSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling patchUserSegment");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling patchUserSegment");
      }

      // verify the required parameter 'patchOnly' is set
      if (patchOnly === undefined || patchOnly === null) {
        throw new Error("Missing the required parameter 'patchOnly' when calling patchUserSegment");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
      var returnType = UserSegment;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{environmentKey}/{userSegmentKey}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserSegment operation.
     * @callback module:api/UserSegmentsApi~postUserSegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserSegment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new user segment.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {module:model/UserSegmentBody} userSegmentBody Create a new user segment.
     * @param {module:api/UserSegmentsApi~postUserSegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserSegment}
     */
    this.postUserSegment = function(projectKey, environmentKey, userSegmentBody, callback) {
      var postBody = userSegmentBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postUserSegment");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling postUserSegment");
      }

      // verify the required parameter 'userSegmentBody' is set
      if (userSegmentBody === undefined || userSegmentBody === null) {
        throw new Error("Missing the required parameter 'userSegmentBody' when calling postUserSegment");
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
      var returnType = UserSegment;

      return this.apiClient.callApi(
        '/segments/{projectKey}/{environmentKey}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatedUnboundedSegmentTargets operation.
     * @callback module:api/UserSegmentsApi~updatedUnboundedSegmentTargetsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update targets included or excluded in an unbounded segment
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} userSegmentKey The user segment&#39;s key. The key identifies the user segment in your code.
     * @param {module:model/UnboundedSegmentTargetsBody} unboundedSegmentTargetsBody Add or remove user targets to the included or excluded lists on an unbounded segment
     * @param {module:api/UserSegmentsApi~updatedUnboundedSegmentTargetsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatedUnboundedSegmentTargets = function(projectKey, environmentKey, userSegmentKey, unboundedSegmentTargetsBody, callback) {
      var postBody = unboundedSegmentTargetsBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling updatedUnboundedSegmentTargets");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling updatedUnboundedSegmentTargets");
      }

      // verify the required parameter 'userSegmentKey' is set
      if (userSegmentKey === undefined || userSegmentKey === null) {
        throw new Error("Missing the required parameter 'userSegmentKey' when calling updatedUnboundedSegmentTargets");
      }

      // verify the required parameter 'unboundedSegmentTargetsBody' is set
      if (unboundedSegmentTargetsBody === undefined || unboundedSegmentTargetsBody === null) {
        throw new Error("Missing the required parameter 'unboundedSegmentTargetsBody' when calling updatedUnboundedSegmentTargets");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userSegmentKey': userSegmentKey
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
        '/segments/{projectKey}/{environmentKey}/{userSegmentKey}/unbounded-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
