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
    define(['ApiClient', 'model/ModelsSSLCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSSLCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsSSLInfo = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsSSLCertificate);
  }
}(this, function(ApiClient, ModelsSSLCertificate) {
  'use strict';

  /**
   * The ModelsSSLInfo model module.
   * @module model/ModelsSSLInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsSSLInfo</code>.
   * @alias module:model/ModelsSSLInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsSSLInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsSSLInfo} obj Optional instance to populate.
   * @return {module:model/ModelsSSLInfo} The populated <code>ModelsSSLInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('certificate'))
        obj.certificate = ModelsSSLCertificate.constructFromObject(data['certificate']);
    }
    return obj;
  }

  /**
   * @member {module:model/ModelsSSLCertificate} certificate
   */
  exports.prototype.certificate = undefined;


  return exports;

}));
