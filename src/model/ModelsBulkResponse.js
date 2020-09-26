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
 * Swagger Codegen version: 2.4.15
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
    root.SendPostApi.ModelsBulkResponse = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsBulkResponse model module.
   * @module model/ModelsBulkResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsBulkResponse</code>.
   * @alias module:model/ModelsBulkResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsBulkResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsBulkResponse} obj Optional instance to populate.
   * @return {module:model/ModelsBulkResponse} The populated <code>ModelsBulkResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('jobId'))
        obj.jobId = ApiClient.convertToType(data['jobId'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} jobId
   */
  exports.prototype.jobId = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  return exports;

}));
