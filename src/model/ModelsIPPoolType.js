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
    root.SendPostApi.ModelsIPPoolType = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsIPPoolType model module.
   * @module model/ModelsIPPoolType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIPPoolType</code>.
   * @alias module:model/ModelsIPPoolType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIPPoolType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIPPoolType} obj Optional instance to populate.
   * @return {module:model/ModelsIPPoolType} The populated <code>ModelsIPPoolType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    return data;
  }

  return exports;

}));
