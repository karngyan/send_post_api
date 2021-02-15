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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEIP = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEIP model module.
   * @module model/ModelsEIP
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEIP</code>.
   * @alias module:model/ModelsEIP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEIP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIP} obj Optional instance to populate.
   * @return {module:model/ModelsEIP} The populated <code>ModelsEIP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('publicIP'))
        obj.publicIP = ApiClient.convertToType(data['publicIP'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} publicIP
   */
  exports.prototype.publicIP = undefined;


  return exports;

}));
