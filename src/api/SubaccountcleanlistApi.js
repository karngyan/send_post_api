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
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsCleanedList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsCleanedList'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountcleanlistApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCleanedList);
  }
}(this, function(ApiClient, ModelsCleanedList) {
  'use strict';

  /**
   * Subaccountcleanlist service.
   * @module api/SubaccountcleanlistApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountcleanlistApi. 
   * @alias module:api/SubaccountcleanlistApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listCleaningRouterCleanBulkEmailList operation.
     * @callback module:api/SubaccountcleanlistApi~listCleaningRouterCleanBulkEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCleanedList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Email To Contacts
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountcleanlistApi~listCleaningRouterCleanBulkEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCleanedList}
     */
    this.listCleaningRouterCleanBulkEmailList = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling listCleaningRouterCleanBulkEmailList");
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
      var returnType = ModelsCleanedList;

      return this.apiClient.callApi(
        '/subaccount/cleanlist/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCleaningRouterCleanEmailist operation.
     * @callback module:api/SubaccountcleanlistApi~listCleaningRouterCleanEmailistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCleanedList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clean email list
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:api/SubaccountcleanlistApi~listCleaningRouterCleanEmailistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCleanedList}
     */
    this.listCleaningRouterCleanEmailist = function(xSubAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling listCleaningRouterCleanEmailist");
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
      var returnType = ModelsCleanedList;

      return this.apiClient.callApi(
        '/subaccount/cleanlist/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
