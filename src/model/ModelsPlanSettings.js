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
    define(['ApiClient', 'model/ModelsWarmupSchedules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsWarmupSchedules'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsPlanSettings = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsWarmupSchedules);
  }
}(this, function(ApiClient, ModelsWarmupSchedules) {
  'use strict';

  /**
   * The ModelsPlanSettings model module.
   * @module model/ModelsPlanSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsPlanSettings</code>.
   * @alias module:model/ModelsPlanSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsPlanSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsPlanSettings} obj Optional instance to populate.
   * @return {module:model/ModelsPlanSettings} The populated <code>ModelsPlanSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('warmupDomains'))
        obj.warmupDomains = ApiClient.convertToType(data['warmupDomains'], Object);
      if (data.hasOwnProperty('warmupSchedules'))
        obj.warmupSchedules = ApiClient.convertToType(data['warmupSchedules'], [ModelsWarmupSchedules]);
    }
    return obj;
  }

  /**
   * @member {Object} warmupDomains
   */
  exports.prototype.warmupDomains = undefined;

  /**
   * @member {Array.<module:model/ModelsWarmupSchedules>} warmupSchedules
   */
  exports.prototype.warmupSchedules = undefined;


  return exports;

}));
