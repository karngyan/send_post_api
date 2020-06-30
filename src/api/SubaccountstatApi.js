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
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAIPStat', 'model/ModelsPIPStat', 'model/ModelsRStat', 'model/ModelsStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAIPStat'), require('../model/ModelsPIPStat'), require('../model/ModelsRStat'), require('../model/ModelsStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.SubaccountstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsAIPStat, root.SendPostApi.ModelsPIPStat, root.SendPostApi.ModelsRStat, root.SendPostApi.ModelsStat);
  }
}(this, function(ApiClient, ModelsAIPStat, ModelsPIPStat, ModelsRStat, ModelsStat) {
  'use strict';

  /**
   * Subaccountstat service.
   * @module api/SubaccountstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SubaccountstatApi. 
   * @alias module:api/SubaccountstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregateSubAccountStats operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Sub-Account Stats
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.subAccountStatRouterGetAllAggregateSubAccountStats = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllAggregateSubAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = ModelsStat;

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregateSubAccountStatsByGroup operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate Sub-Account Stats by Group
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} group the group whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregateSubAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsStat}
     */
    this.subAccountStatRouterGetAllAggregateSubAccountStatsByGroup = function(xSubAccountApiKey, group, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllAggregateSubAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling subAccountStatRouterGetAllAggregateSubAccountStatsByGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'group': group,
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
      var returnType = ModelsStat;

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedIPStatsForASubAccount operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedIPStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated IP Stats for a Sub-Account
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedIPStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAIPStat>}
     */
    this.subAccountStatRouterGetAllAggregatedIPStatsForASubAccount = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllAggregatedIPStatsForASubAccount");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsAIPStat];

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate/ips', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Specific IP of a Sub-Account
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPIPStat>}
     */
    this.subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount = function(xSubAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling subAccountStatRouterGetAllAggregatedProviderStatsForASpecificIPOfASubAccount");
      }


      var pathParams = {
        'ipid': ipid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsPIPStat];

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate/ip/{ipid}/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPIPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregated Provider Stats for a Sub-Account
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllAggregatedProviderStatsForASubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPIPStat>}
     */
    this.subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllAggregatedProviderStatsForASubAccount");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsPIPStat];

      return this.apiClient.callApi(
        '/subaccount/stat/aggregate/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllSubAccountStats operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sub-Account Stats
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStat>}
     */
    this.subAccountStatRouterGetAllSubAccountStats = function(xSubAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllSubAccountStats");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
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
      var returnType = [ModelsRStat];

      return this.apiClient.callApi(
        '/subaccount/stat/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subAccountStatRouterGetAllSubAccountStatsByGroup operation.
     * @callback module:api/SubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsByGroupCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsRStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Sub-Account Stats by Group
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {String} group the tag whose stats you want
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/SubaccountstatApi~subAccountStatRouterGetAllSubAccountStatsByGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsRStat>}
     */
    this.subAccountStatRouterGetAllSubAccountStatsByGroup = function(xSubAccountApiKey, group, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling subAccountStatRouterGetAllSubAccountStatsByGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling subAccountStatRouterGetAllSubAccountStatsByGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'group': group,
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
      var returnType = [ModelsRStat];

      return this.apiClient.callApi(
        '/subaccount/stat/group', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
