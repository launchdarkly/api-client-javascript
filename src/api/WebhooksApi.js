/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.33
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
    define(['ApiClient', 'model/PatchOperation', 'model/Webhook', 'model/WebhookBody', 'model/Webhooks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PatchOperation'), require('../model/Webhook'), require('../model/WebhookBody'), require('../model/Webhooks'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.WebhooksApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.PatchOperation, root.LaunchDarklyApi.Webhook, root.LaunchDarklyApi.WebhookBody, root.LaunchDarklyApi.Webhooks);
  }
}(this, function(ApiClient, PatchOperation, Webhook, WebhookBody, Webhooks) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 2.0.33
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteWebhook operation.
     * @callback module:api/WebhooksApi~deleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a webhook by ID.
     * @param {String} resourceId The resource ID.
     * @param {module:api/WebhooksApi~deleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhook = function(resourceId, callback) {
      var postBody = null;

      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling deleteWebhook");
      }


      var pathParams = {
        'resourceId': resourceId
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
        '/webhooks/{resourceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhook operation.
     * @callback module:api/WebhooksApi~getWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a webhook by ID.
     * @param {String} resourceId The resource ID.
     * @param {module:api/WebhooksApi~getWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.getWebhook = function(resourceId, callback) {
      var postBody = null;

      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getWebhook");
      }


      var pathParams = {
        'resourceId': resourceId
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
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhooks/{resourceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooks operation.
     * @callback module:api/WebhooksApi~getWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhooks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a list of all webhooks.
     * @param {module:api/WebhooksApi~getWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhooks}
     */
    this.getWebhooks = function(callback) {
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
      var returnType = Webhooks;

      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchWebhook operation.
     * @callback module:api/WebhooksApi~patchWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify a webhook by ID.
     * @param {String} resourceId The resource ID.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39;
     * @param {module:api/WebhooksApi~patchWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.patchWebhook = function(resourceId, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling patchWebhook");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchWebhook");
      }


      var pathParams = {
        'resourceId': resourceId
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
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhooks/{resourceId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postWebhook operation.
     * @callback module:api/WebhooksApi~postWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a webhook.
     * @param {module:model/WebhookBody} webhookBody New webhook.
     * @param {module:api/WebhooksApi~postWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.postWebhook = function(webhookBody, callback) {
      var postBody = webhookBody;

      // verify the required parameter 'webhookBody' is set
      if (webhookBody === undefined || webhookBody === null) {
        throw new Error("Missing the required parameter 'webhookBody' when calling postWebhook");
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
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
