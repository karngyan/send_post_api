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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsAIPStat', 'model/ModelsAccount', 'model/ModelsAuthInfo', 'model/ModelsCity', 'model/ModelsCountStat', 'model/ModelsDNSRecord', 'model/ModelsDeleteResponse', 'model/ModelsDomain', 'model/ModelsEAccount', 'model/ModelsEDomain', 'model/ModelsEIP', 'model/ModelsEIPPool', 'model/ModelsESender', 'model/ModelsESubAccount', 'model/ModelsEWebhook', 'model/ModelsEmailErrorCode', 'model/ModelsEmailMessage', 'model/ModelsEmailResponse', 'model/ModelsEventMetadata', 'model/ModelsEventType', 'model/ModelsFrom', 'model/ModelsIP', 'model/ModelsIPPool', 'model/ModelsIPPoolType', 'model/ModelsIPStat', 'model/ModelsIPType', 'model/ModelsInstance', 'model/ModelsMember', 'model/ModelsPIPStat', 'model/ModelsQEmailMessage', 'model/ModelsQEvent', 'model/ModelsRDSuppression', 'model/ModelsRIPStat', 'model/ModelsRStat', 'model/ModelsRSuppression', 'model/ModelsReplyTo', 'model/ModelsRoutingStrategy', 'model/ModelsSIPStat', 'model/ModelsSender', 'model/ModelsStat', 'model/ModelsSubAccount', 'model/ModelsSubAccountType', 'model/ModelsSuppression', 'model/ModelsSuppressionEmail', 'model/ModelsSuppressionReason', 'model/ModelsSystemDNSRecord', 'model/ModelsSystemDomain', 'model/ModelsTo', 'model/ModelsWMessage', 'model/ModelsWebhook', 'model/UaparserDevice', 'model/UaparserOs', 'model/UaparserUserAgent', 'api/AccountipApi', 'api/AccountipstatApi', 'api/AccountstatApi', 'api/AccountsubaccountApi', 'api/AuthApi', 'api/ClusterApi', 'api/SubaccountdomainApi', 'api/SubaccountemailApi', 'api/SubaccounteventApi', 'api/SubaccountippoolApi', 'api/SubaccountmessageApi', 'api/SubaccountrecipientApi', 'api/SubaccountsenderApi', 'api/SubaccountstatApi', 'api/SubaccountsuppressionApi', 'api/SubaccountwebhookApi', 'api/TrackApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ModelsAIPStat'), require('./model/ModelsAccount'), require('./model/ModelsAuthInfo'), require('./model/ModelsCity'), require('./model/ModelsCountStat'), require('./model/ModelsDNSRecord'), require('./model/ModelsDeleteResponse'), require('./model/ModelsDomain'), require('./model/ModelsEAccount'), require('./model/ModelsEDomain'), require('./model/ModelsEIP'), require('./model/ModelsEIPPool'), require('./model/ModelsESender'), require('./model/ModelsESubAccount'), require('./model/ModelsEWebhook'), require('./model/ModelsEmailErrorCode'), require('./model/ModelsEmailMessage'), require('./model/ModelsEmailResponse'), require('./model/ModelsEventMetadata'), require('./model/ModelsEventType'), require('./model/ModelsFrom'), require('./model/ModelsIP'), require('./model/ModelsIPPool'), require('./model/ModelsIPPoolType'), require('./model/ModelsIPStat'), require('./model/ModelsIPType'), require('./model/ModelsInstance'), require('./model/ModelsMember'), require('./model/ModelsPIPStat'), require('./model/ModelsQEmailMessage'), require('./model/ModelsQEvent'), require('./model/ModelsRDSuppression'), require('./model/ModelsRIPStat'), require('./model/ModelsRStat'), require('./model/ModelsRSuppression'), require('./model/ModelsReplyTo'), require('./model/ModelsRoutingStrategy'), require('./model/ModelsSIPStat'), require('./model/ModelsSender'), require('./model/ModelsStat'), require('./model/ModelsSubAccount'), require('./model/ModelsSubAccountType'), require('./model/ModelsSuppression'), require('./model/ModelsSuppressionEmail'), require('./model/ModelsSuppressionReason'), require('./model/ModelsSystemDNSRecord'), require('./model/ModelsSystemDomain'), require('./model/ModelsTo'), require('./model/ModelsWMessage'), require('./model/ModelsWebhook'), require('./model/UaparserDevice'), require('./model/UaparserOs'), require('./model/UaparserUserAgent'), require('./api/AccountipApi'), require('./api/AccountipstatApi'), require('./api/AccountstatApi'), require('./api/AccountsubaccountApi'), require('./api/AuthApi'), require('./api/ClusterApi'), require('./api/SubaccountdomainApi'), require('./api/SubaccountemailApi'), require('./api/SubaccounteventApi'), require('./api/SubaccountippoolApi'), require('./api/SubaccountmessageApi'), require('./api/SubaccountrecipientApi'), require('./api/SubaccountsenderApi'), require('./api/SubaccountstatApi'), require('./api/SubaccountsuppressionApi'), require('./api/SubaccountwebhookApi'), require('./api/TrackApi'));
  }
}(function(ApiClient, ModelsAIPStat, ModelsAccount, ModelsAuthInfo, ModelsCity, ModelsCountStat, ModelsDNSRecord, ModelsDeleteResponse, ModelsDomain, ModelsEAccount, ModelsEDomain, ModelsEIP, ModelsEIPPool, ModelsESender, ModelsESubAccount, ModelsEWebhook, ModelsEmailErrorCode, ModelsEmailMessage, ModelsEmailResponse, ModelsEventMetadata, ModelsEventType, ModelsFrom, ModelsIP, ModelsIPPool, ModelsIPPoolType, ModelsIPStat, ModelsIPType, ModelsInstance, ModelsMember, ModelsPIPStat, ModelsQEmailMessage, ModelsQEvent, ModelsRDSuppression, ModelsRIPStat, ModelsRStat, ModelsRSuppression, ModelsReplyTo, ModelsRoutingStrategy, ModelsSIPStat, ModelsSender, ModelsStat, ModelsSubAccount, ModelsSubAccountType, ModelsSuppression, ModelsSuppressionEmail, ModelsSuppressionReason, ModelsSystemDNSRecord, ModelsSystemDomain, ModelsTo, ModelsWMessage, ModelsWebhook, UaparserDevice, UaparserOs, UaparserUserAgent, AccountipApi, AccountipstatApi, AccountstatApi, AccountsubaccountApi, AuthApi, ClusterApi, SubaccountdomainApi, SubaccountemailApi, SubaccounteventApi, SubaccountippoolApi, SubaccountmessageApi, SubaccountrecipientApi, SubaccountsenderApi, SubaccountstatApi, SubaccountsuppressionApi, SubaccountwebhookApi, TrackApi) {
  'use strict';

  /**
   * SendPost_API_to_send_transactional_emails_reliably.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SendPostApi = require('index'); // See note below*.
   * var xxxSvc = new SendPostApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SendPostApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SendPostApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SendPostApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ModelsAIPStat model constructor.
     * @property {module:model/ModelsAIPStat}
     */
    ModelsAIPStat: ModelsAIPStat,
    /**
     * The ModelsAccount model constructor.
     * @property {module:model/ModelsAccount}
     */
    ModelsAccount: ModelsAccount,
    /**
     * The ModelsAuthInfo model constructor.
     * @property {module:model/ModelsAuthInfo}
     */
    ModelsAuthInfo: ModelsAuthInfo,
    /**
     * The ModelsCity model constructor.
     * @property {module:model/ModelsCity}
     */
    ModelsCity: ModelsCity,
    /**
     * The ModelsCountStat model constructor.
     * @property {module:model/ModelsCountStat}
     */
    ModelsCountStat: ModelsCountStat,
    /**
     * The ModelsDNSRecord model constructor.
     * @property {module:model/ModelsDNSRecord}
     */
    ModelsDNSRecord: ModelsDNSRecord,
    /**
     * The ModelsDeleteResponse model constructor.
     * @property {module:model/ModelsDeleteResponse}
     */
    ModelsDeleteResponse: ModelsDeleteResponse,
    /**
     * The ModelsDomain model constructor.
     * @property {module:model/ModelsDomain}
     */
    ModelsDomain: ModelsDomain,
    /**
     * The ModelsEAccount model constructor.
     * @property {module:model/ModelsEAccount}
     */
    ModelsEAccount: ModelsEAccount,
    /**
     * The ModelsEDomain model constructor.
     * @property {module:model/ModelsEDomain}
     */
    ModelsEDomain: ModelsEDomain,
    /**
     * The ModelsEIP model constructor.
     * @property {module:model/ModelsEIP}
     */
    ModelsEIP: ModelsEIP,
    /**
     * The ModelsEIPPool model constructor.
     * @property {module:model/ModelsEIPPool}
     */
    ModelsEIPPool: ModelsEIPPool,
    /**
     * The ModelsESender model constructor.
     * @property {module:model/ModelsESender}
     */
    ModelsESender: ModelsESender,
    /**
     * The ModelsESubAccount model constructor.
     * @property {module:model/ModelsESubAccount}
     */
    ModelsESubAccount: ModelsESubAccount,
    /**
     * The ModelsEWebhook model constructor.
     * @property {module:model/ModelsEWebhook}
     */
    ModelsEWebhook: ModelsEWebhook,
    /**
     * The ModelsEmailErrorCode model constructor.
     * @property {module:model/ModelsEmailErrorCode}
     */
    ModelsEmailErrorCode: ModelsEmailErrorCode,
    /**
     * The ModelsEmailMessage model constructor.
     * @property {module:model/ModelsEmailMessage}
     */
    ModelsEmailMessage: ModelsEmailMessage,
    /**
     * The ModelsEmailResponse model constructor.
     * @property {module:model/ModelsEmailResponse}
     */
    ModelsEmailResponse: ModelsEmailResponse,
    /**
     * The ModelsEventMetadata model constructor.
     * @property {module:model/ModelsEventMetadata}
     */
    ModelsEventMetadata: ModelsEventMetadata,
    /**
     * The ModelsEventType model constructor.
     * @property {module:model/ModelsEventType}
     */
    ModelsEventType: ModelsEventType,
    /**
     * The ModelsFrom model constructor.
     * @property {module:model/ModelsFrom}
     */
    ModelsFrom: ModelsFrom,
    /**
     * The ModelsIP model constructor.
     * @property {module:model/ModelsIP}
     */
    ModelsIP: ModelsIP,
    /**
     * The ModelsIPPool model constructor.
     * @property {module:model/ModelsIPPool}
     */
    ModelsIPPool: ModelsIPPool,
    /**
     * The ModelsIPPoolType model constructor.
     * @property {module:model/ModelsIPPoolType}
     */
    ModelsIPPoolType: ModelsIPPoolType,
    /**
     * The ModelsIPStat model constructor.
     * @property {module:model/ModelsIPStat}
     */
    ModelsIPStat: ModelsIPStat,
    /**
     * The ModelsIPType model constructor.
     * @property {module:model/ModelsIPType}
     */
    ModelsIPType: ModelsIPType,
    /**
     * The ModelsInstance model constructor.
     * @property {module:model/ModelsInstance}
     */
    ModelsInstance: ModelsInstance,
    /**
     * The ModelsMember model constructor.
     * @property {module:model/ModelsMember}
     */
    ModelsMember: ModelsMember,
    /**
     * The ModelsPIPStat model constructor.
     * @property {module:model/ModelsPIPStat}
     */
    ModelsPIPStat: ModelsPIPStat,
    /**
     * The ModelsQEmailMessage model constructor.
     * @property {module:model/ModelsQEmailMessage}
     */
    ModelsQEmailMessage: ModelsQEmailMessage,
    /**
     * The ModelsQEvent model constructor.
     * @property {module:model/ModelsQEvent}
     */
    ModelsQEvent: ModelsQEvent,
    /**
     * The ModelsRDSuppression model constructor.
     * @property {module:model/ModelsRDSuppression}
     */
    ModelsRDSuppression: ModelsRDSuppression,
    /**
     * The ModelsRIPStat model constructor.
     * @property {module:model/ModelsRIPStat}
     */
    ModelsRIPStat: ModelsRIPStat,
    /**
     * The ModelsRStat model constructor.
     * @property {module:model/ModelsRStat}
     */
    ModelsRStat: ModelsRStat,
    /**
     * The ModelsRSuppression model constructor.
     * @property {module:model/ModelsRSuppression}
     */
    ModelsRSuppression: ModelsRSuppression,
    /**
     * The ModelsReplyTo model constructor.
     * @property {module:model/ModelsReplyTo}
     */
    ModelsReplyTo: ModelsReplyTo,
    /**
     * The ModelsRoutingStrategy model constructor.
     * @property {module:model/ModelsRoutingStrategy}
     */
    ModelsRoutingStrategy: ModelsRoutingStrategy,
    /**
     * The ModelsSIPStat model constructor.
     * @property {module:model/ModelsSIPStat}
     */
    ModelsSIPStat: ModelsSIPStat,
    /**
     * The ModelsSender model constructor.
     * @property {module:model/ModelsSender}
     */
    ModelsSender: ModelsSender,
    /**
     * The ModelsStat model constructor.
     * @property {module:model/ModelsStat}
     */
    ModelsStat: ModelsStat,
    /**
     * The ModelsSubAccount model constructor.
     * @property {module:model/ModelsSubAccount}
     */
    ModelsSubAccount: ModelsSubAccount,
    /**
     * The ModelsSubAccountType model constructor.
     * @property {module:model/ModelsSubAccountType}
     */
    ModelsSubAccountType: ModelsSubAccountType,
    /**
     * The ModelsSuppression model constructor.
     * @property {module:model/ModelsSuppression}
     */
    ModelsSuppression: ModelsSuppression,
    /**
     * The ModelsSuppressionEmail model constructor.
     * @property {module:model/ModelsSuppressionEmail}
     */
    ModelsSuppressionEmail: ModelsSuppressionEmail,
    /**
     * The ModelsSuppressionReason model constructor.
     * @property {module:model/ModelsSuppressionReason}
     */
    ModelsSuppressionReason: ModelsSuppressionReason,
    /**
     * The ModelsSystemDNSRecord model constructor.
     * @property {module:model/ModelsSystemDNSRecord}
     */
    ModelsSystemDNSRecord: ModelsSystemDNSRecord,
    /**
     * The ModelsSystemDomain model constructor.
     * @property {module:model/ModelsSystemDomain}
     */
    ModelsSystemDomain: ModelsSystemDomain,
    /**
     * The ModelsTo model constructor.
     * @property {module:model/ModelsTo}
     */
    ModelsTo: ModelsTo,
    /**
     * The ModelsWMessage model constructor.
     * @property {module:model/ModelsWMessage}
     */
    ModelsWMessage: ModelsWMessage,
    /**
     * The ModelsWebhook model constructor.
     * @property {module:model/ModelsWebhook}
     */
    ModelsWebhook: ModelsWebhook,
    /**
     * The UaparserDevice model constructor.
     * @property {module:model/UaparserDevice}
     */
    UaparserDevice: UaparserDevice,
    /**
     * The UaparserOs model constructor.
     * @property {module:model/UaparserOs}
     */
    UaparserOs: UaparserOs,
    /**
     * The UaparserUserAgent model constructor.
     * @property {module:model/UaparserUserAgent}
     */
    UaparserUserAgent: UaparserUserAgent,
    /**
     * The AccountipApi service constructor.
     * @property {module:api/AccountipApi}
     */
    AccountipApi: AccountipApi,
    /**
     * The AccountipstatApi service constructor.
     * @property {module:api/AccountipstatApi}
     */
    AccountipstatApi: AccountipstatApi,
    /**
     * The AccountstatApi service constructor.
     * @property {module:api/AccountstatApi}
     */
    AccountstatApi: AccountstatApi,
    /**
     * The AccountsubaccountApi service constructor.
     * @property {module:api/AccountsubaccountApi}
     */
    AccountsubaccountApi: AccountsubaccountApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The ClusterApi service constructor.
     * @property {module:api/ClusterApi}
     */
    ClusterApi: ClusterApi,
    /**
     * The SubaccountdomainApi service constructor.
     * @property {module:api/SubaccountdomainApi}
     */
    SubaccountdomainApi: SubaccountdomainApi,
    /**
     * The SubaccountemailApi service constructor.
     * @property {module:api/SubaccountemailApi}
     */
    SubaccountemailApi: SubaccountemailApi,
    /**
     * The SubaccounteventApi service constructor.
     * @property {module:api/SubaccounteventApi}
     */
    SubaccounteventApi: SubaccounteventApi,
    /**
     * The SubaccountippoolApi service constructor.
     * @property {module:api/SubaccountippoolApi}
     */
    SubaccountippoolApi: SubaccountippoolApi,
    /**
     * The SubaccountmessageApi service constructor.
     * @property {module:api/SubaccountmessageApi}
     */
    SubaccountmessageApi: SubaccountmessageApi,
    /**
     * The SubaccountrecipientApi service constructor.
     * @property {module:api/SubaccountrecipientApi}
     */
    SubaccountrecipientApi: SubaccountrecipientApi,
    /**
     * The SubaccountsenderApi service constructor.
     * @property {module:api/SubaccountsenderApi}
     */
    SubaccountsenderApi: SubaccountsenderApi,
    /**
     * The SubaccountstatApi service constructor.
     * @property {module:api/SubaccountstatApi}
     */
    SubaccountstatApi: SubaccountstatApi,
    /**
     * The SubaccountsuppressionApi service constructor.
     * @property {module:api/SubaccountsuppressionApi}
     */
    SubaccountsuppressionApi: SubaccountsuppressionApi,
    /**
     * The SubaccountwebhookApi service constructor.
     * @property {module:api/SubaccountwebhookApi}
     */
    SubaccountwebhookApi: SubaccountwebhookApi,
    /**
     * The TrackApi service constructor.
     * @property {module:api/TrackApi}
     */
    TrackApi: TrackApi
  };

  return exports;
}));
