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
    define(['ApiClient', 'model/ModelsEmailMessage', 'model/ModelsEmailResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsEmailMessage'), require('../model/ModelsEmailResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountemailApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEmailMessage, root.SendPostApi.ModelsEmailResponse);
  }
}(this, function(ApiClient, ModelsEmailMessage, ModelsEmailResponse) {
  'use strict';

  /**
   * Subaccountemail service.
   * @module api/SubaccountemailApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountemailApi. 
   * @alias module:api/SubaccountemailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the emailRouterSendEmail operation.
     * @callback module:api/SubaccountemailApi~emailRouterSendEmailCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsEmailResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Email To Contacts
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {module:model/ModelsEmailMessage} body The Email Message
     * @param {module:api/SubaccountemailApi~emailRouterSendEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsEmailResponse>}
     */
    this.emailRouterSendEmail = function(xSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling emailRouterSendEmail");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling emailRouterSendEmail");
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
      var returnType = [ModelsEmailResponse];

      return this.apiClient.callApi(
        '/subaccount/email/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
