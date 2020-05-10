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
    define(['ApiClient', 'model/ModelsQEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsQEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccounteventApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsQEvent);
  }
}(this, function(ApiClient, ModelsQEvent) {
  'use strict';

  /**
   * Subaccountevent service.
   * @module api/SubaccounteventApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccounteventApi. 
   * @alias module:api/SubaccounteventApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the eventRouterGet operation.
     * @callback module:api/SubaccounteventApi~eventRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Event By Id
     * @param {Number} subAccountId the subAccountId whose event you want to retrieve
     * @param {String} eventId the eventId that you want to retrieve
     * @param {module:api/SubaccounteventApi~eventRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEvent}
     */
    this.eventRouterGet = function(subAccountId, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling eventRouterGet");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling eventRouterGet");
      }


      var pathParams = {
        'subAccountId': subAccountId,
        'eventId': eventId
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
      var returnType = ModelsQEvent;

      return this.apiClient.callApi(
        '/subaccount/event/{eventId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventsFromASubAccountForAGivenTimeRange operation.
     * @callback module:api/SubaccounteventApi~eventRouterGetAllEventsFromASubAccountForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events from a sub-account for a given time-range
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} subAccountId the subAccountId whose event you want to retrieve
     * @param {module:api/SubaccounteventApi~eventRouterGetAllEventsFromASubAccountForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventsFromASubAccountForAGivenTimeRange = function(xSubAccountApiKey, subAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling eventRouterGetAllEventsFromASubAccountForAGivenTimeRange");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling eventRouterGetAllEventsFromASubAccountForAGivenTimeRange");
      }


      var pathParams = {
        'subAccountId': subAccountId
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/subaccount/event/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange operation.
     * @callback module:api/SubaccounteventApi~eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRangeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsQEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all events of a sub-account from a specific node for a give time-range
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} subAccountId the subAccountId whose event you want to retrieve
     * @param {module:api/SubaccounteventApi~eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsQEvent>}
     */
    this.eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange = function(xSubAccountApiKey, subAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange");
      }

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling eventRouterGetAllEventsOfASubAccountFromASpecificNodeForAGivenTimeRange");
      }


      var pathParams = {
        'subAccountId': subAccountId
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
      var returnType = [ModelsQEvent];

      return this.apiClient.callApi(
        '/subaccount/event/node/{subAccountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventRouterGetEventInNode operation.
     * @callback module:api/SubaccounteventApi~eventRouterGetEventInNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsQEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Event From Node by id
     * @param {Number} subAccountId the subAccountId whose event you want to retrieve
     * @param {String} eventId the eventId that you want to retrieve
     * @param {module:api/SubaccounteventApi~eventRouterGetEventInNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsQEvent}
     */
    this.eventRouterGetEventInNode = function(subAccountId, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'subAccountId' is set
      if (subAccountId === undefined || subAccountId === null) {
        throw new Error("Missing the required parameter 'subAccountId' when calling eventRouterGetEventInNode");
      }

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling eventRouterGetEventInNode");
      }


      var pathParams = {
        'subAccountId': subAccountId,
        'eventId': eventId
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
      var returnType = ModelsQEvent;

      return this.apiClient.callApi(
        '/subaccount/event/node/{subAccountId}/{eventId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
