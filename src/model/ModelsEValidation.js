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
 * Swagger Codegen version: 2.4.16
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
    root.SendPostApi.ModelsEValidation = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEValidation model module.
   * @module model/ModelsEValidation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEValidation</code>.
   * @alias module:model/ModelsEValidation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEValidation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEValidation} obj Optional instance to populate.
   * @return {module:model/ModelsEValidation} The populated <code>ModelsEValidation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('emails'))
        obj.emails = ApiClient.convertToType(data['emails'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} emails
   */
  exports.prototype.emails = undefined;

  return exports;

}));
