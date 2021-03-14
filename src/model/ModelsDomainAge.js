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
 * Swagger Codegen version: 2.4.19
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
    root.SendPostApi.ModelsDomainAge = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsDomainAge model module.
   * @module model/ModelsDomainAge
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDomainAge</code>.
   * @alias module:model/ModelsDomainAge
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDomainAge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDomainAge} obj Optional instance to populate.
   * @return {module:model/ModelsDomainAge} The populated <code>ModelsDomainAge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domainAgeFound'))
        obj.domainAgeFound = ApiClient.convertToType(data['domainAgeFound'], 'Boolean');
      if (data.hasOwnProperty('domainAgeInDays'))
        obj.domainAgeInDays = ApiClient.convertToType(data['domainAgeInDays'], 'Number');
      if (data.hasOwnProperty('domainAgeInMonths'))
        obj.domainAgeInMonths = ApiClient.convertToType(data['domainAgeInMonths'], 'Number');
      if (data.hasOwnProperty('domainAgeInYears'))
        obj.domainAgeInYears = ApiClient.convertToType(data['domainAgeInYears'], 'Number');
      if (data.hasOwnProperty('domainCreationDate'))
        obj.domainCreationDate = ApiClient.convertToType(data['domainCreationDate'], 'String');
      if (data.hasOwnProperty('domainRegistered'))
        obj.domainRegistered = ApiClient.convertToType(data['domainRegistered'], 'String');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} domainAgeFound
   */
  exports.prototype.domainAgeFound = undefined;

  /**
   * @member {Number} domainAgeInDays
   */
  exports.prototype.domainAgeInDays = undefined;

  /**
   * @member {Number} domainAgeInMonths
   */
  exports.prototype.domainAgeInMonths = undefined;

  /**
   * @member {Number} domainAgeInYears
   */
  exports.prototype.domainAgeInYears = undefined;

  /**
   * @member {String} domainCreationDate
   */
  exports.prototype.domainCreationDate = undefined;

  /**
   * @member {String} domainRegistered
   */
  exports.prototype.domainRegistered = undefined;

  /**
   * @member {String} host
   */
  exports.prototype.host = undefined;


  return exports;

}));
