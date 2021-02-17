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
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIP', 'model/ModelsIPPoolType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIP'), require('./ModelsIPPoolType'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsAccountIPPool = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIP, root.SendPostApi.ModelsIPPoolType);
  }
}(this, function(ApiClient, ModelsIP, ModelsIPPoolType) {
  'use strict';

  /**
   * The ModelsAccountIPPool model module.
   * @module model/ModelsAccountIPPool
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccountIPPool</code>.
   * @alias module:model/ModelsAccountIPPool
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccountIPPool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccountIPPool} obj Optional instance to populate.
   * @return {module:model/ModelsAccountIPPool} The populated <code>ModelsAccountIPPool</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('ips'))
        obj.ips = ApiClient.convertToType(data['ips'], [ModelsIP]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('routingMetaData'))
        obj.routingMetaData = ApiClient.convertToType(data['routingMetaData'], 'String');
      if (data.hasOwnProperty('routingStrategy'))
        obj.routingStrategy = ApiClient.convertToType(data['routingStrategy'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ModelsIPPoolType.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Array.<module:model/ModelsIP>} ips
   */
  exports.prototype.ips = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} routingMetaData
   */
  exports.prototype.routingMetaData = undefined;

  /**
   * @member {Number} routingStrategy
   */
  exports.prototype.routingStrategy = undefined;

  /**
   * @member {module:model/ModelsIPPoolType} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
