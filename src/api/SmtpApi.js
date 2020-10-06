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
    define(['ApiClient', 'model/ModelsWMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsWMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SmtpApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsWMessage);
  }
}(this, function(ApiClient, ModelsWMessage) {
  'use strict';

  /**
   * Smtp service.
   * @module api/SmtpApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SmtpApi. 
   * @alias module:api/SmtpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sMTPRouterReceiveWebhooksRaisedFromSMTPServers operation.
     * @callback module:api/SmtpApi~sMTPRouterReceiveWebhooksRaisedFromSMTPServersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receive webhooks raised from SMTP servers
     * @param {module:model/ModelsWMessage} body The Webhook content
     * @param {module:api/SmtpApi~sMTPRouterReceiveWebhooksRaisedFromSMTPServersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sMTPRouterReceiveWebhooksRaisedFromSMTPServers = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sMTPRouterReceiveWebhooksRaisedFromSMTPServers");
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
        '/smtp/webhook', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
