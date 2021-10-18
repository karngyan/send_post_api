/*
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.TrackApi = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Track service.
   * @module api/TrackApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TrackApi. 
   * @alias module:api/TrackApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the trackRouterTrackEmailOpen operation.
     * @callback module:api/TrackApi~trackRouterTrackEmailOpenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Track Email Open
     * @param {Number} ipId The id of ip from which this email message was sent
     * @param {Number} accountId The id of account from which email is being sent
     * @param {Number} subAccountId The id of sub-account from which email is being sent
     * @param {String} messageId The UUID of message which was sent
     * @param {String} emailType The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address
     * @param {module:api/TrackApi~trackRouterTrackEmailOpenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.trackRouterTrackEmailOpen = function(ipId, accountId, subAccountId, messageId, emailType, callback) {
      var postBody = null;

      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling trackRouterTrackEmailOpen");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling trackRouterTrackEmailOpen");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling trackRouterTrackEmailOpen");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling trackRouterTrackEmailOpen");
      }

      // verify the required parameter 'emailType' is set
      if (emailType === undefined || emailType === null) {
        throw new Error("Missing the required parameter 'emailType' when calling trackRouterTrackEmailOpen");
      }


      var pathParams = {
        'ipId': ipId,
        'accountId': accountId,
        'subAccountId': subAccountId,
        'messageId': messageId,
        'emailType': emailType
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
        '/track/open/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId}/1.png', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackRouterTrackLinkClick operation.
     * @callback module:api/TrackApi~trackRouterTrackLinkClickCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Track Link Click
     * @param {Number} ipId The id of ip from which this email message was sent
     * @param {Number} accountId The id of account from which email is being sent
     * @param {Number} subAccountId The id of sub-account from which email is being sent
     * @param {String} messageId The UUID of message which was sent
     * @param {String} emailType The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address
     * @param {String} redirecturl The encoded redirect URL
     * @param {module:api/TrackApi~trackRouterTrackLinkClickCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.trackRouterTrackLinkClick = function(ipId, accountId, subAccountId, messageId, emailType, redirecturl, callback) {
      var postBody = null;

      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling trackRouterTrackLinkClick");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling trackRouterTrackLinkClick");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling trackRouterTrackLinkClick");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling trackRouterTrackLinkClick");
      }

      // verify the required parameter 'emailType' is set
      if (emailType === undefined || emailType === null) {
        throw new Error("Missing the required parameter 'emailType' when calling trackRouterTrackLinkClick");
      }

      // verify the required parameter 'redirecturl' is set
      if (redirecturl === undefined || redirecturl === null) {
        throw new Error("Missing the required parameter 'redirecturl' when calling trackRouterTrackLinkClick");
      }


      var pathParams = {
        'ipId': ipId,
        'accountId': accountId,
        'subAccountId': subAccountId,
        'messageId': messageId,
        'emailType': emailType
      };
      var queryParams = {
        'redirecturl': redirecturl,
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
        '/track/click/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackRouterTrackUnsubscribe operation.
     * @callback module:api/TrackApi~trackRouterTrackUnsubscribeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * track link click
     * @param {Number} ipId The id of ip from which this email message was sent
     * @param {Number} accountId The id of account from which email is being sent
     * @param {Number} subAccountId The id of sub-account from which email is being sent
     * @param {String} messageId The UUID of message which was sent
     * @param {String} emailType The type of email such as gmail, yahoo etc. which was sent. This is inferred from to email address
     * @param {module:api/TrackApi~trackRouterTrackUnsubscribeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.trackRouterTrackUnsubscribe = function(ipId, accountId, subAccountId, messageId, emailType, callback) {
      var postBody = null;

      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling trackRouterTrackUnsubscribe");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling trackRouterTrackUnsubscribe");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling trackRouterTrackUnsubscribe");
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling trackRouterTrackUnsubscribe");
      }

      // verify the required parameter 'emailType' is set
      if (emailType === undefined || emailType === null) {
        throw new Error("Missing the required parameter 'emailType' when calling trackRouterTrackUnsubscribe");
      }


      var pathParams = {
        'ipId': ipId,
        'accountId': accountId,
        'subAccountId': subAccountId,
        'messageId': messageId,
        'emailType': emailType
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
        '/track/unsubscribe/{accountId}/{subAccountId}/{ipId}/{emailType}/{messageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
