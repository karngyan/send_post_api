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
    define(['ApiClient', 'model/ModelsOnboardingChecklist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsOnboardingChecklist'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountonboardingApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsOnboardingChecklist);
  }
}(this, function(ApiClient, ModelsOnboardingChecklist) {
  'use strict';

  /**
   * Accountonboarding service.
   * @module api/AccountonboardingApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountonboardingApi. 
   * @alias module:api/AccountonboardingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the onboardingRouterGetOnboardingChecklist operation.
     * @callback module:api/AccountonboardingApi~onboardingRouterGetOnboardingChecklistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsOnboardingChecklist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets Onboarding Checklist data for account if not present creates a default entry
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountonboardingApi~onboardingRouterGetOnboardingChecklistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsOnboardingChecklist}
     */
    this.onboardingRouterGetOnboardingChecklist = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling onboardingRouterGetOnboardingChecklist");
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
      var returnType = ModelsOnboardingChecklist;

      return this.apiClient.callApi(
        '/account/onboarding/checklist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
