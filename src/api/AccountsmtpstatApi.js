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
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsSMTPStat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsSMTPStat'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.AccountsmtpstatApi = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSMTPStat);
  }
}(this, function(ApiClient, ModelsSMTPStat) {
  'use strict';

  /**
   * Accountsmtpstat service.
   * @module api/AccountsmtpstatApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountsmtpstatApi. 
   * @alias module:api/AccountsmtpstatApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPProviderSMTPStats operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPProviderSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP Provider SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IP ID you want to get
     * @param {String} pname the provider name
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPProviderSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateIPProviderSMTPStats = function(xAccountApiKey, ipid, pname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }

      // verify the required parameter 'pname' is set
      if (pname === undefined || pname === null) {
        throw new Error("Missing the required parameter 'pname' when calling sMTPStatRouterGetAllAggregateIPProviderSMTPStats");
      }


      var pathParams = {
        'ipid': ipid,
        'pname': pname
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/provider/{pname}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPSMTPStats operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IPId you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateIPSMTPStats = function(xAccountApiKey, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPSMTPStats");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPSMTPStats");
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
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate IP SMTP Stats For SubAccount
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} ipid the IP ID you want to get
     * @param {Number} sid the SubAccount ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount = function(xAccountApiKey, ipid, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount");
      }


      var pathParams = {
        'ipid': ipid,
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount Provider SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the SubAccount ID you want to get
     * @param {String} pname the provider name
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats = function(xAccountApiKey, sid, pname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }

      // verify the required parameter 'pname' is set
      if (pname === undefined || pname === null) {
        throw new Error("Missing the required parameter 'pname' when calling sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats");
      }


      var pathParams = {
        'sid': sid,
        'pname': pname
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/provider/{pname}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountSMTPStats operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount SMTP Stats
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the Sub-Account ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateSubAccountSMTPStats = function(xAccountApiKey, sid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStats");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStats");
      }


      var pathParams = {
        'sid': sid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP operation.
     * @callback module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsSMTPStat>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Aggregate SubAccount SMTP Stats For IP
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} sid the Sub-Account ID you want to get
     * @param {Number} ipid the IP  ID you want to get
     * @param {Object} opts Optional parameters
     * @param {String} opts.from from date
     * @param {String} opts.to to date
     * @param {module:api/AccountsmtpstatApi~sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsSMTPStat>}
     */
    this.sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP = function(xAccountApiKey, sid, ipid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }

      // verify the required parameter 'ipid' is set
      if (ipid === undefined || ipid === null) {
        throw new Error("Missing the required parameter 'ipid' when calling sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP");
      }


      var pathParams = {
        'sid': sid,
        'ipid': ipid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [ModelsSMTPStat];

      return this.apiClient.callApi(
        '/account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
