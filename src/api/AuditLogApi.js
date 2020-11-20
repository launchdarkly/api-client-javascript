/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.0
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
    define(['ApiClient', 'model/AuditLogEntries', 'model/AuditLogEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuditLogEntries'), require('../model/AuditLogEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.AuditLogApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.AuditLogEntries, root.LaunchDarklyApi.AuditLogEntry);
  }
}(this, function(ApiClient, AuditLogEntries, AuditLogEntry) {
  'use strict';

  /**
   * AuditLog service.
   * @module api/AuditLogApi
   * @version 3.9.0
   */

  /**
   * Constructs a new AuditLogApi. 
   * @alias module:api/AuditLogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAuditLogEntries operation.
     * @callback module:api/AuditLogApi~getAuditLogEntriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditLogEntries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.before A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp.
     * @param {Number} opts.after A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occurred after this timestamp.
     * @param {String} opts.q Text to search for. You can search for the full or partial name of the resource involved or full or partial email address of the member who made the change.
     * @param {Number} opts.limit A limit on the number of audit log entries to be returned, between 1 and 20.
     * @param {String} opts.spec A resource specifier, allowing you to filter audit log listings by resource.
     * @param {module:api/AuditLogApi~getAuditLogEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditLogEntries}
     */
    this.getAuditLogEntries = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'before': opts['before'],
        'after': opts['after'],
        'q': opts['q'],
        'limit': opts['limit'],
        'spec': opts['spec'],
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
      var returnType = AuditLogEntries;

      return this.apiClient.callApi(
        '/auditlog', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditLogEntry operation.
     * @callback module:api/AuditLogApi~getAuditLogEntryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditLogEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use this endpoint to fetch a single audit log entry by its resouce ID.
     * @param {String} resourceId The resource ID.
     * @param {module:api/AuditLogApi~getAuditLogEntryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditLogEntry}
     */
    this.getAuditLogEntry = function(resourceId, callback) {
      var postBody = null;

      // verify the required parameter 'resourceId' is set
      if (resourceId === undefined || resourceId === null) {
        throw new Error("Missing the required parameter 'resourceId' when calling getAuditLogEntry");
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
      var returnType = AuditLogEntry;

      return this.apiClient.callApi(
        '/auditlog/{resourceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
