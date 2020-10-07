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
 * Swagger Codegen version: 2.4.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBulkResponse', 'model/ModelsCleanedList', 'model/ModelsEmailList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBulkResponse'), require('../model/ModelsCleanedList'), require('../model/ModelsEmailList'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountvalidateApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsBulkResponse, root.SendPostApi.ModelsCleanedList, root.SendPostApi.ModelsEmailList);
  }
}(this, function(ApiClient, ModelsBulkResponse, ModelsCleanedList, ModelsEmailList) {
  'use strict';

  /**
   * Accountvalidate service.
   * @module api/AccountvalidateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountvalidateApi. 
   * @alias module:api/AccountvalidateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validateRouterValidateEmailBulk operation.
     * @callback module:api/AccountvalidateApi~validateRouterValidateEmailBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Emails In File Asynchronously
     * @param {File} fileinput CSV whose emails need to be validated
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountvalidateApi~validateRouterValidateEmailBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validateRouterValidateEmailBulk = function(fileinput, xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'fileinput' is set
      if (fileinput === undefined || fileinput === null) {
        throw new Error("Missing the required parameter 'fileinput' when calling validateRouterValidateEmailBulk");
      }

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validateRouterValidateEmailBulk");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
        'fileinput': fileinput
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validate/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateRouterValidateEmailList operation.
     * @callback module:api/AccountvalidateApi~validateRouterValidateEmailListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCleanedList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Email List Synchronously
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEmailList} body The email list to be sent for being validated
     * @param {module:api/AccountvalidateApi~validateRouterValidateEmailListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCleanedList}
     */
    this.validateRouterValidateEmailList = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validateRouterValidateEmailList");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validateRouterValidateEmailList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsCleanedList;

      return this.apiClient.callApi(
        '/account/validate/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
