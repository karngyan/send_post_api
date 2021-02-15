/*
 * SendPost API
 * SendPost API to send emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsDeleteResponse', 'model/ModelsTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeleteResponse'), require('../model/ModelsTag'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccounttagApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsTag);
  }
}(this, function(ApiClient, ModelsDeleteResponse, ModelsTag) {
  'use strict';

  /**
   * Accounttag service.
   * @module api/AccounttagApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccounttagApi. 
   * @alias module:api/AccounttagApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tagRouterCreate operation.
     * @callback module:api/AccounttagApi~tagRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Tag
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsTag} body The Tag content
     * @param {module:api/AccounttagApi~tagRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsTag}
     */
    this.tagRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tagRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tagRouterCreate");
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
      var returnType = ModelsTag;

      return this.apiClient.callApi(
        '/account/tag/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagRouterDelete operation.
     * @callback module:api/AccounttagApi~tagRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Tag
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} tagid The AccountTagId you want to delete
     * @param {module:api/AccounttagApi~tagRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.tagRouterDelete = function(xAccountApiKey, tagid, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tagRouterDelete");
      }

      // verify the required parameter 'tagid' is set
      if (tagid === undefined || tagid === null) {
        throw new Error("Missing the required parameter 'tagid' when calling tagRouterDelete");
      }


      var pathParams = {
        'tagid': tagid
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/tag/{tagid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagRouterGetAll operation.
     * @callback module:api/AccounttagApi~tagRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsTag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Tags
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccounttagApi~tagRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsTag>}
     */
    this.tagRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling tagRouterGetAll");
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
      var returnType = [ModelsTag];

      return this.apiClient.callApi(
        '/account/tag/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
