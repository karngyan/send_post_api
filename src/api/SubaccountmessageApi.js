/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
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
    define(['ApiClient', 'model/ModelsQEmailMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsQEmailMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountmessageApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsQEmailMessage);
  }
}(this, function(ApiClient, ModelsQEmailMessage) {
  'use strict';

  /**
   * Subaccountmessage service.
   * @module api/SubaccountmessageApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountmessageApi. 
   * @alias module:api/SubaccountmessageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the messageRouterGet operation.
     * @callback module:api/SubaccountmessageApi~messageRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEmailMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Message By Id
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/SubaccountmessageApi~messageRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEmailMessage}
     */
    this.messageRouterGet = function(messageId, callback) {
      var postBody = null;

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGet");
      }


      var pathParams = {
        'messageId': messageId
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
      var returnType = ModelsQEmailMessage;

      return this.apiClient.callApi(
        '/subaccount/message/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange operation.
     * @callback module:api/SubaccountmessageApi~messageRouterGetAllMessagesFromASubAccountBasedOnTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEmailMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all messages of a sub-account based on time-range
     * @param {module:api/SubaccountmessageApi~messageRouterGetAllMessagesFromASubAccountBasedOnTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEmailMessage>}
     */
    this.messageRouterGetAllMessagesFromASubAccountBasedOnTimeRange = function(callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsQEmailMessage];

      return this.apiClient.callApi(
        '/subaccount/message/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange operation.
     * @callback module:api/SubaccountmessageApi~messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEmailMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all messages of a sub-account from a specific node based on time-range
     * @param {Number} subAccountId the subAccountId whose message you want to retrieve
     * @param {module:api/SubaccountmessageApi~messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEmailMessage>}
     */
    this.messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange = function(subAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling messageRouterGetAllMessagesOfASubAccountFromASpecificNodeBasedOnTimeRange");
      }


      var pathParams = {
        'subAccountId': subAccountId
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
      var returnType = [ModelsQEmailMessage];

      return this.apiClient.callApi(
        '/subaccount/message/node/{subAccountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the messageRouterGetMessageFromNodeById operation.
     * @callback module:api/SubaccountmessageApi~messageRouterGetMessageFromNodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEmailMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Message from node by specific Id
     * @param {Number} subAccountId the subAccountId whose message you want to retrieve
     * @param {String} messageId the messageId that you want to retrieve
     * @param {module:api/SubaccountmessageApi~messageRouterGetMessageFromNodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEmailMessage}
     */
    this.messageRouterGetMessageFromNodeById = function(subAccountId, messageId, callback) {
      var postBody = null;

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling messageRouterGetMessageFromNodeById");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling messageRouterGetMessageFromNodeById");
      }


      var pathParams = {
        'subAccountId': subAccountId,
        'messageId': messageId
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
      var returnType = ModelsQEmailMessage;

      return this.apiClient.callApi(
        '/subaccount/message/node/{subAccountId}/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
