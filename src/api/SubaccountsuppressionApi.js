/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsRDSuppression', 'model/ModelsRSuppression', 'model/ModelsSuppression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsRDSuppression'), require('../model/ModelsRSuppression'), require('../model/ModelsSuppression'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountsuppressionApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsRDSuppression, root.SendPostApi.ModelsRSuppression, root.SendPostApi.ModelsSuppression);
  }
}(this, function(ApiClient, ModelsRDSuppression, ModelsRSuppression, ModelsSuppression) {
  'use strict';

  /**
   * Subaccountsuppression service.
   * @module api/SubaccountsuppressionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountsuppressionApi. 
   * @alias module:api/SubaccountsuppressionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the suppressionRouterCreateSuppressions operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSuppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression List
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsRSuppression} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSuppression}
     */
    this.suppressionRouterCreateSuppressions = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterCreateSuppressions");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterCreateSuppressions");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSuppression;

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterCreateSuppressionsInSuppressionFilter operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsInSuppressionFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Email Addresses To Suppression Filter
     * @param {Array.<module:model/ModelsSuppression>} body Add suppressions to suppression filter
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterCreateSuppressionsInSuppressionFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterCreateSuppressionsInSuppressionFilter = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterCreateSuppressionsInSuppressionFilter");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/suppression/filter', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterDeleteSuppression operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsSuppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete specific emails which are in suppression list
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsRDSuppression} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsSuppression}
     */
    this.suppressionRouterDeleteSuppression = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterDeleteSuppression");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterDeleteSuppression");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsSuppression;

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterDeleteSuppressionsInSuppressionFilter operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionsInSuppressionFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete specific emails which are in suppression list
     * @param {Array.<module:model/ModelsSuppression>} body Suppression content
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterDeleteSuppressionsInSuppressionFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.suppressionRouterDeleteSuppressionsInSuppressionFilter = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling suppressionRouterDeleteSuppressionsInSuppressionFilter");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/subaccount/suppression/filter', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suppressionRouterGetAllSuppressions operation.
     * @callback module:api/SubaccountsuppressionApi~suppressionRouterGetAllSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSuppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all suppressions
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/SubaccountsuppressionApi~suppressionRouterGetAllSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSuppression>}
     */
    this.suppressionRouterGetAllSuppressions = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling suppressionRouterGetAllSuppressions");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsSuppression];

      return this.apiClient.callApi(
        '/subaccount/suppression/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
