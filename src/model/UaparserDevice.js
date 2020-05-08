/*
 * SendPost API
 * SendPost API to send fast transactional emails to inbox
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
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
    root.SendPostApi.UaparserDevice = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UaparserDevice model module.
   * @module model/UaparserDevice
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UaparserDevice</code>.
   * @alias module:model/UaparserDevice
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UaparserDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UaparserDevice} obj Optional instance to populate.
   * @return {module:model/UaparserDevice} The populated <code>UaparserDevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Family'))
        obj.family = ApiClient.convertToType(data['Family'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} family
   */
  exports.prototype.family = undefined;

  return exports;

}));
