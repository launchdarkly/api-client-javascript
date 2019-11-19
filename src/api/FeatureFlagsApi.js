/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.22
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
    define(['ApiClient', 'model/FeatureFlag', 'model/FeatureFlagBody', 'model/FeatureFlagCopyBody', 'model/FeatureFlagStatus', 'model/FeatureFlagStatusAcrossEnvironments', 'model/FeatureFlagStatuses', 'model/FeatureFlags', 'model/PatchComment', 'model/UsageError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FeatureFlag'), require('../model/FeatureFlagBody'), require('../model/FeatureFlagCopyBody'), require('../model/FeatureFlagStatus'), require('../model/FeatureFlagStatusAcrossEnvironments'), require('../model/FeatureFlagStatuses'), require('../model/FeatureFlags'), require('../model/PatchComment'), require('../model/UsageError'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.FeatureFlag, root.LaunchDarklyApi.FeatureFlagBody, root.LaunchDarklyApi.FeatureFlagCopyBody, root.LaunchDarklyApi.FeatureFlagStatus, root.LaunchDarklyApi.FeatureFlagStatusAcrossEnvironments, root.LaunchDarklyApi.FeatureFlagStatuses, root.LaunchDarklyApi.FeatureFlags, root.LaunchDarklyApi.PatchComment, root.LaunchDarklyApi.UsageError);
  }
}(this, function(ApiClient, FeatureFlag, FeatureFlagBody, FeatureFlagCopyBody, FeatureFlagStatus, FeatureFlagStatusAcrossEnvironments, FeatureFlagStatuses, FeatureFlags, PatchComment, UsageError) {
  'use strict';

  /**
   * FeatureFlags service.
   * @module api/FeatureFlagsApi
   * @version 2.0.22
   */

  /**
   * Constructs a new FeatureFlagsApi. 
   * @alias module:api/FeatureFlagsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the copyFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~copyFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copies the feature flag configuration from one environment to the same feature flag in another environment.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:model/FeatureFlagCopyBody} featureFlagCopyBody Copy feature flag configurations between environments.
     * @param {module:api/FeatureFlagsApi~copyFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlag}
     */
    this.copyFeatureFlag = function(projectKey, featureFlagKey, featureFlagCopyBody, callback) {
      var postBody = featureFlagCopyBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling copyFeatureFlag");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling copyFeatureFlag");
      }

      // verify the required parameter 'featureFlagCopyBody' is set
      if (featureFlagCopyBody === undefined || featureFlagCopyBody === null) {
        throw new Error("Missing the required parameter 'featureFlagCopyBody' when calling copyFeatureFlag");
      }


      var pathParams = {
        'projectKey': projectKey,
        'featureFlagKey': featureFlagKey
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
      var returnType = FeatureFlag;

      return this.apiClient.callApi(
        '/flags/{projectKey}/{featureFlagKey}/copy', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~deleteFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:api/FeatureFlagsApi~deleteFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFeatureFlag = function(projectKey, featureFlagKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling deleteFeatureFlag");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling deleteFeatureFlag");
      }


      var pathParams = {
        'projectKey': projectKey,
        'featureFlagKey': featureFlagKey
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
        '/flags/{projectKey}/{featureFlagKey}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single feature flag by key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.env By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env&#x3D;production will restrict the returned configurations to just your production environment.
     * @param {module:api/FeatureFlagsApi~getFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlag}
     */
    this.getFeatureFlag = function(projectKey, featureFlagKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getFeatureFlag");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling getFeatureFlag");
      }


      var pathParams = {
        'projectKey': projectKey,
        'featureFlagKey': featureFlagKey
      };
      var queryParams = {
        'env': opts['env'],
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
      var returnType = FeatureFlag;

      return this.apiClient.callApi(
        '/flags/{projectKey}/{featureFlagKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureFlagStatus operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlagStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status for a particular feature flag.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:api/FeatureFlagsApi~getFeatureFlagStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlagStatus}
     */
    this.getFeatureFlagStatus = function(projectKey, environmentKey, featureFlagKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getFeatureFlagStatus");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getFeatureFlagStatus");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling getFeatureFlagStatus");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'featureFlagKey': featureFlagKey
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
      var returnType = FeatureFlagStatus;

      return this.apiClient.callApi(
        '/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureFlagStatusAcrossEnvironments operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagStatusAcrossEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlagStatusAcrossEnvironments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status for a particular feature flag across environments
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:api/FeatureFlagsApi~getFeatureFlagStatusAcrossEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlagStatusAcrossEnvironments}
     */
    this.getFeatureFlagStatusAcrossEnvironments = function(projectKey, featureFlagKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getFeatureFlagStatusAcrossEnvironments");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling getFeatureFlagStatusAcrossEnvironments");
      }


      var pathParams = {
        'projectKey': projectKey,
        'featureFlagKey': featureFlagKey
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
      var returnType = FeatureFlagStatusAcrossEnvironments;

      return this.apiClient.callApi(
        '/flag-status/{projectKey}/{featureFlagKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureFlagStatuses operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlagStatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
     * @param {module:api/FeatureFlagsApi~getFeatureFlagStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlagStatuses}
     */
    this.getFeatureFlagStatuses = function(projectKey, environmentKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getFeatureFlagStatuses");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getFeatureFlagStatuses");
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
      var returnType = FeatureFlagStatuses;

      return this.apiClient.callApi(
        '/flag-statuses/{projectKey}/{environmentKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFeatureFlags operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all features in the given project.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {Object} opts Optional parameters
     * @param {String} opts.env By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env&#x3D;production will restrict the returned configurations to just your production environment.
     * @param {String} opts.summary By default in api version &gt;&#x3D; 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary&#x3D;0 to include these fields for each flag returned.
     * @param {String} opts.archived When set to 1, archived flags will be included in the list of flags returned.  By default, archived flags are not included in the list of flags.
     * @param {String} opts.tag Filter by tag. A tag can be used to group flags across projects.
     * @param {module:api/FeatureFlagsApi~getFeatureFlagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlags}
     */
    this.getFeatureFlags = function(projectKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getFeatureFlags");
      }


      var pathParams = {
        'projectKey': projectKey
      };
      var queryParams = {
        'env': opts['env'],
        'summary': opts['summary'],
        'archived': opts['archived'],
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
      var returnType = FeatureFlags;

      return this.apiClient.callApi(
        '/flags/{projectKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~patchFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a partial update to a feature.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:model/PatchComment} patchComment Requires a JSON Patch representation of the desired changes to the project, and an optional comment. &#39;http://jsonpatch.com/&#39; Feature flag patches also support JSON Merge Patch format. &#39;https://tools.ietf.org/html/rfc7386&#39; The addition of comments is also supported.
     * @param {module:api/FeatureFlagsApi~patchFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlag}
     */
    this.patchFeatureFlag = function(projectKey, featureFlagKey, patchComment, callback) {
      var postBody = patchComment;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling patchFeatureFlag");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling patchFeatureFlag");
      }

      // verify the required parameter 'patchComment' is set
      if (patchComment === undefined || patchComment === null) {
        throw new Error("Missing the required parameter 'patchComment' when calling patchFeatureFlag");
      }


      var pathParams = {
        'projectKey': projectKey,
        'featureFlagKey': featureFlagKey
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
      var returnType = FeatureFlag;

      return this.apiClient.callApi(
        '/flags/{projectKey}/{featureFlagKey}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~postFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new feature flag.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {module:model/FeatureFlagBody} featureFlagBody Create a new feature flag.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clone The key of the feature flag to be cloned. The key identifies the flag in your code.  For example, setting clone&#x3D;flagKey will copy the full targeting configuration for all environments (including on/off state) from the original flag to the new flag.
     * @param {module:api/FeatureFlagsApi~postFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlag}
     */
    this.postFeatureFlag = function(projectKey, featureFlagBody, opts, callback) {
      opts = opts || {};
      var postBody = featureFlagBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling postFeatureFlag");
      }

      // verify the required parameter 'featureFlagBody' is set
      if (featureFlagBody === undefined || featureFlagBody === null) {
        throw new Error("Missing the required parameter 'featureFlagBody' when calling postFeatureFlag");
      }


      var pathParams = {
        'projectKey': projectKey
      };
      var queryParams = {
        'clone': opts['clone'],
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
      var returnType = FeatureFlag;

      return this.apiClient.callApi(
        '/flags/{projectKey}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
