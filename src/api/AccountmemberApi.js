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
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsDeleteResponse', 'model/ModelsEMember', 'model/ModelsMember', 'model/ModelsVerifyByMemberTokenRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEMember'), require('../model/ModelsMember'), require('../model/ModelsVerifyByMemberTokenRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountmemberApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDeleteResponse, root.SendPostApi.ModelsEMember, root.SendPostApi.ModelsMember, root.SendPostApi.ModelsVerifyByMemberTokenRequest);
  }
}(this, function(ApiClient, ModelsDeleteResponse, ModelsEMember, ModelsMember, ModelsVerifyByMemberTokenRequest) {
  'use strict';

  /**
   * Accountmember service.
   * @module api/AccountmemberApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountmemberApi. 
   * @alias module:api/AccountmemberApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the memberRouterDelete operation.
     * @callback module:api/AccountmemberApi~memberRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Member
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId The MemberId you want to delete
     * @param {module:api/AccountmemberApi~memberRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.memberRouterDelete = function(xAccountApiKey, memberId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterDelete");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterDelete");
      }


      var pathParams = {
        'memberId': memberId
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
        '/account/member/{memberId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterGet operation.
     * @callback module:api/AccountmemberApi~memberRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Member by MemberId
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId the MemberId you want to get
     * @param {module:api/AccountmemberApi~memberRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsMember}
     */
    this.memberRouterGet = function(xAccountApiKey, memberId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterGet");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterGet");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = ModelsMember;

      return this.apiClient.callApi(
        '/account/member/{memberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterGetAll operation.
     * @callback module:api/AccountmemberApi~memberRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Members
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountmemberApi~memberRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsMember>}
     */
    this.memberRouterGetAll = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterGetAll");
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
      var returnType = [ModelsMember];

      return this.apiClient.callApi(
        '/account/member/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterUpdate operation.
     * @callback module:api/AccountmemberApi~memberRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Member
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId The MemberId you want to update
     * @param {module:model/ModelsEMember} body The body
     * @param {module:api/AccountmemberApi~memberRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsMember}
     */
    this.memberRouterUpdate = function(xAccountApiKey, memberId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterUpdate");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling memberRouterUpdate");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = ModelsMember;

      return this.apiClient.callApi(
        '/account/member/{memberId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the memberRouterVerifyByEmailRequest operation.
     * @callback module:api/AccountmemberApi~memberRouterVerifyByEmailRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Member By Email Request
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} memberId the MemberId who is inviting new member to join the account
     * @param {module:model/ModelsVerifyByMemberTokenRequest} body The Email to be used to verify
     * @param {module:api/AccountmemberApi~memberRouterVerifyByEmailRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.memberRouterVerifyByEmailRequest = function(xAccountApiKey, memberId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling memberRouterVerifyByEmailRequest");
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling memberRouterVerifyByEmailRequest");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling memberRouterVerifyByEmailRequest");
      }


      var pathParams = {
        'memberId': memberId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/account/member/{memberId}/verify/email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
