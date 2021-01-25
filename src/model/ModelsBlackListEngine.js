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
    root.SendPostApi.ModelsBlackListEngine = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsBlackListEngine model module.
   * @module model/ModelsBlackListEngine
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsBlackListEngine</code>.
   * @alias module:model/ModelsBlackListEngine
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsBlackListEngine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBlackListEngine} obj Optional instance to populate.
   * @return {module:model/ModelsBlackListEngine} The populated <code>ModelsBlackListEngine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('confidence'))
        obj.confidence = ApiClient.convertToType(data['confidence'], 'String');
      if (data.hasOwnProperty('detected'))
        obj.detected = ApiClient.convertToType(data['detected'], 'Boolean');
      if (data.hasOwnProperty('elapsed'))
        obj.elapsed = ApiClient.convertToType(data['elapsed'], 'String');
      if (data.hasOwnProperty('engine'))
        obj.engine = ApiClient.convertToType(data['engine'], 'String');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} confidence
   */
  exports.prototype.confidence = undefined;

  /**
   * @member {Boolean} detected
   */
  exports.prototype.detected = undefined;

  /**
   * @member {String} elapsed
   */
  exports.prototype.elapsed = undefined;

  /**
   * @member {String} engine
   */
  exports.prototype.engine = undefined;

  /**
   * @member {String} reference
   */
  exports.prototype.reference = undefined;


  return exports;

}));
